import React, { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const passwordgenerator = (checkboxData, length) => {
    let charset = "",
      generatedpassword = "";

    const selectedoption = checkboxData.filter((checkbox) => checkbox.state);

    if (selectedoption.length === 0) {
      setError("Select atleast one option");
      setPassword("");
      return;
    }

    selectedoption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;

        case "Include Lowercase Letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;

        case "Include Numbers":
          charset += "0123456789";
          break;

        case "Include Symbols":
          charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedpassword += charset[randomIndex];
    }
    setPassword(generatedpassword);
    setError("");
  };

  return { password, error, passwordgenerator };
};

export default usePasswordGenerator;
