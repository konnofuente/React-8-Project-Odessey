interface IRequestOptions {
  method: string;
  header?: { [key: string]: string };
  body?: any;
}

interface IHttpClient {
  get<T>(url: string, option?: IRequestOptions): Promise<T>;
  post<T>(url: string, data?: any, option?: IRequestOptions): Promise<T>;
}

class FetchHttpClient implements IHttpClient {
  async get<T>(url: string, option?: IRequestOptions | undefined): Promise<T> {
    const response = await fetch(url, { ...option, method: "GET" });
    return response.json();
  }

  async post<T>(
    url: string,
    data?: any,
    option?: IRequestOptions | undefined
  ): Promise<T> {
    const response = await fetch(url, {
      ...option,
      method: "POST",
      body: JSON.stringify(data),
    });
    return response.json();
  }
}



class AxiosHttpClient implements IHttpClient {
    get<T>(url: string, option?: IRequestOptions | undefined): Promise<T> {
        throw new Error("Method not implemented.");
    }
    post<T>(url: string, data?: any, option?: IRequestOptions | undefined): Promise<T> {
        throw new Error("Method not implemented.");
    }
  }
  
  // Current Http Client being used by the application
  const CurrentHttpClient: IHttpClient = new FetchHttpClient();
  
  export const api = {
    get: <T>(url: string, options?: IRequestOptions) => CurrentHttpClient.get<T>(url, options),
    post: <T>(url: string, data?: any, options?: IRequestOptions) => CurrentHttpClient.post<T>(url, data, options),
    // Add more shorthand methods if needed (e.g., delete, put)
  };