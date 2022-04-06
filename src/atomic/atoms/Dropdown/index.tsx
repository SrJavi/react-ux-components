import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  createRef,
  Dispatch,
  SetStateAction,
} from 'react';
import { FaTimes } from 'react-icons/fa';
import CheckboxIcon from '../CheckboxIcon';
import {
  Container,
  Select,
  HeaderValue,
  ChevronDown,
  ChevronUp,
  ButtonClearSelection,
  List,
  InputSearch,
  Search,
  ListScroll,
  ListItem,
  ItemValue,
} from './styles';

export interface IOptions {
  value: string;
  label?: string;
}

export interface DropdownProps {
  options: IOptions[];
  selectedItems: IOptions[];
  setSelectedItems: Dispatch<SetStateAction<IOptions[]>>;
  isMultiple?: boolean;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedItems,
  setSelectedItems,
  isMultiple = false,
  disabled = false,
}) => {
  const headerValue = createRef<HTMLDivElement>();
  const searchField = createRef<HTMLInputElement>();

  const [isOpen, setIsOpen] = useState<boolean>();
  const [keyword, setKeyword] = useState<string>();

  const sorted = useMemo(
    () =>
      options &&
      options
        .slice()
        .sort((a, b) =>
          String(a.label).toLocaleLowerCase() >
          String(b.label).toLocaleLowerCase()
            ? 1
            : String(b.label).toLocaleLowerCase() >
              String(a.label).toLocaleLowerCase()
            ? -1
            : 0
        ),
    [options]
  );

  useEffect(() => {
    const leftJoin = selectedItems.map((item) => ({
      ...item,
      ...options?.find((option) => option.value === item.value),
    }));

    if (JSON.stringify(leftJoin) !== JSON.stringify(selectedItems)) {
      setSelectedItems(leftJoin);
    }
  }, [options]);

  useLayoutEffect(() => {
    if (headerValue.current) {
      if (selectedItems.length === 0) {
        headerValue.current.innerText = `Seleccionar...`;
      } else {
        headerValue.current.innerText = selectedItems
          .map((item) => item.label)
          .join(', ');
        if (headerValue.current.clientWidth < headerValue.current.scrollWidth) {
          headerValue.current.innerText = `Seleccionados: ${selectedItems.length} `;
        }
      }
    }
    return () => {};
  }, [selectedItems, headerValue]);

  useLayoutEffect(() => {
    const colse = () => {
      setIsOpen(false);
    };
    setTimeout(() => {
      if (isOpen) {
        window.addEventListener('click', colse);
      } else {
        window.removeEventListener('click', colse);
      }
    }, 0);
    return () => {
      window.removeEventListener('click', colse);
    };
  }, [isOpen]);

  const toggleList = () => {
    setIsOpen(!isOpen);
    setKeyword('');
  };

  useEffect(() => {
    if (searchField.current) {
      searchField.current.focus();
    }
  }, [searchField]);

  const filterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.toLowerCase());
  };

  const selectItem = (e: React.MouseEvent<HTMLElement>, item: IOptions) => {
    if (isMultiple) e.stopPropagation();
    setSelectedItems(handleSelection(item, selectedItems));
  };

  const handleSelection = (
    item: IOptions,
    selectedItems: IOptions[]
  ): IOptions[] => {
    const index = selectedItems.findIndex((i) => i.value === item.value);
    if (isMultiple) {
      if (index !== -1) {
        const selectedItemsCopy = [...selectedItems];
        selectedItemsCopy.splice(index, 1);
        return selectedItemsCopy;
      } else {
        return [...selectedItems, item];
      }
    } else {
      return [item];
    }
  };

  const clearSelection = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSelectedItems([]);
  };

  let tempList = [...sorted];

  if (keyword) {
    tempList = sorted.filter((item) =>
      item.label?.toLowerCase().includes(keyword.toLocaleLowerCase() || '')
    );
  }

  return (
    <Container disabled={disabled}>
      <Select onClick={toggleList} disabled={disabled}>
        <HeaderValue ref={headerValue}>{`Seleccionar...`}</HeaderValue>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </Select>
      {selectedItems.length !== 0 && (
        <ButtonClearSelection onClick={clearSelection}>
          <FaTimes />
        </ButtonClearSelection>
      )}
      {isOpen && (
        <List>
          <InputSearch onClick={(e) => e.stopPropagation()}>
            <input
              ref={searchField}
              placeholder={`Buscar...`}
              onChange={(e) => filterList(e)}
            />
            <Search />
          </InputSearch>
          <ListScroll>
            {tempList.length ? (
              tempList.map((item, index) => {
                const isChecked =
                  selectedItems &&
                  selectedItems.filter(
                    (i) =>
                      String(i.value).toLocaleLowerCase() ===
                      String(item.value).toLocaleLowerCase()
                  ).length > 0;

                return (
                  <ListItem
                    key={index}
                    onClick={(e) => {
                      selectItem(e, item);
                    }}
                    isChecked={isChecked}
                  >
                    {isMultiple && (
                      <div style={{ marginRight: '10px' }}>
                        <CheckboxIcon isChecked={isChecked} />
                      </div>
                    )}
                    <ItemValue>{item.label}</ItemValue>
                  </ListItem>
                );
              })
            ) : (
              <ListItem>
                <ItemValue>{'Sin Resultado'}</ItemValue>
              </ListItem>
            )}
          </ListScroll>
        </List>
      )}
    </Container>
  );
};

export default Dropdown;
