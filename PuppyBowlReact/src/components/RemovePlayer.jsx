const RemovePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/${playerId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Fetch failed to remove player.");
    }

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

export default RemovePlayer;
