export const getLastTickets = async () =>  {
    const resp = await fetch (`${process.env.REACT_APP_SERVER_PATH}/lastTickets`);
    const data = await resp.json();
    return data.lastTickets;
}