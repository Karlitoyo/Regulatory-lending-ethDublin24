import React, { useState, useEffect } from "react";
import ethereumService from "./ethereumService";

function UserInfo() {
  const [userAddress, setUserAddress] = useState("");
  const [lastTransaction, setLastTransaction] = useState(null);

  useEffect(() => {
    // Fetch user's wallet address
    ethereumService.getUserAddress().then((address) => setUserAddress(address));

    // Fetch user's last transaction
    ethereumService.getLastTransaction().then((transaction) => setLastTransaction(transaction));
  }, []);

  return (
    <div>
      <h2>User Info</h2>
      <p>Wallet Address: {userAddress}</p>
      <p>Last Transaction: {lastTransaction ? lastTransaction.hash : "Loading..."}</p>
      {/* Additional transaction details can be displayed here */}
    </div>
  );
}

export default UserInfo;
