export const loggerMiddleware =
  (storeAPI: { getState: () => any }) =>
  (next: (arg0: any) => any) =>
  (action: any) => {
    const previousState = storeAPI.getState();
    let result = next(action);

    if (process.env.NODE_ENV !== "production") {
      console.log(
        "Action!",
        "\nprevious state:",
        previousState,
        "\ndispatched action:",
        action,
        "\nnext state:",
        storeAPI.getState()
      );
    }
    return result;
  };
