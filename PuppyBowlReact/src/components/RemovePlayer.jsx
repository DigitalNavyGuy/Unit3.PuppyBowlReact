import { API_URL } from "../API";

const RemovePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}/${playerId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Fetch failed to remove player.");
    }

    const result = puppies.filter((player) => player.id !== playerId);
    setPuppies(result);
    console.log(result);
  } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
  }
};

export default RemovePlayer;
