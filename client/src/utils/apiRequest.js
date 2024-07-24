

export const apiRequest = async ({ endUrl, method, body }) => {
  const baseUrl = "https://school-management-ybi2.onrender.com/api/v1/";
  const url = `${baseUrl}${endUrl}`;

  const options = {
    method,
    body,
  };

  if (!(body instanceof FormData)) {
    options.headers = {
      "Content-Type": "application/json",
    };
  }

  try {
    console.log(`Fetching URL: ${url}`);
    const response = await fetch(url, options);
    const data = await response.json();

    return {
      status: response.status,
      data,
    };
  } catch (error) {
    console.error("Error making API request:", error);
    throw error;
  }
};
