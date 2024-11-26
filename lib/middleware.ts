/**
 * This middleware is responsible for logging the actions and the state of the store.
 * @param storeAPI - The Redux store.
 * @returns The next middleware in the chain.
 */
export const loggerMiddleware =
  (storeAPI: { getState: () => any }) =>
  (next: (arg0: any) => any) =>
  (action: any) => {
    const previousState = storeAPI.getState();
    let result = next(action);
    const reduxPersistActions = ["persist/REHYDRATE", "persist/PERSIST"];

    if (
      process.env.NODE_ENV !== "production" &&
      !reduxPersistActions.includes(action.type)
    ) {
      console.info(
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
