const publicUrl = process.env.PUBLIC_URL || '';
let urlLength = publicUrl.split('/').length;
if (publicUrl.endsWith('/')) urlLength = urlLength - 1;
let baseUrl = window.location.pathname.split('/').slice(0, urlLength).join('/');

let endpoint = window.location.origin + baseUrl + '/';

export interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

const headers = () => {
  const h = new Headers();

  h.append('Content-Type', 'application/json');
  return h;
};

async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  const text = await response.text();
  try {
    // may error if there is no body
    response.parsedBody = JSON.parse(text);
  } catch (ex) {
    throw new Error(text);
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export async function Get<T>(
  path: string,
  args: RequestInit = { method: 'get', headers: headers() }
): Promise<HttpResponse<T>> {
  const url = `${endpoint}${path}`;
  return await http<T>(new Request(url, args));
}

export async function Post<T>(
  path: string,
  body: any,
  args: RequestInit = {
    method: 'post',
    body: JSON.stringify(body),
    headers: headers(),
  }
): Promise<HttpResponse<T>> {
  const url = `${endpoint}${path}`;
  return await http<T>(new Request(url, args));
}
