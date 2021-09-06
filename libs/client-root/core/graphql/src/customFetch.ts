const parseHeaders = (rawHeaders: any) => {
  const headers = new Headers();
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  const preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
  preProcessedHeaders.split(/\r?\n/).forEach((line: any) => {
    const parts = line.split(':');
    const key = parts.shift().trim();
    if (key) {
      const value = parts.join(':').trim();
      headers.append(key, value);
    }
  });

  return headers;
};

const uploadFetch = (url: string, options: any): Promise<Response> =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const opts: any = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || ''),
      };
      opts.url =
        'responseURL' in xhr
          ? xhr.responseURL
          : opts.headers.get('X-Request-URL');
      const body = 'response' in xhr ? xhr.response : (xhr as any).responseText;
      resolve(new Response(body, opts));
    };
    xhr.onerror = () => {
      reject(new TypeError('Network request failed'));
    };
    xhr.ontimeout = () => {
      reject(new TypeError('Network request failed'));
    };
    xhr.open(options.method || '', url, true);

    if (options.headers) {
      Object.keys(options.headers).forEach((key) => {
        const headerValue = (options.headers as Record<string, any>)[key];

        xhr.setRequestHeader(key, headerValue);
      });
    }

    if (xhr.upload) {
      xhr.upload.onprogress = options.onProgress;
    }

    if (options.onAbortPossible) {
      options.onAbortPossible(() => {
        xhr.abort();
      });
    }

    xhr.send(options.body);
  });

export const customFetch = (uri: string, options: any) => {
  if (options.onProgress) {
    return uploadFetch(uri, options);
  }

  return fetch(uri, options);
};
