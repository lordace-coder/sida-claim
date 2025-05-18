function isCryptoAddress(address) {
  if (!address) return false;
  // Convert to string and trim whitespace
  address = String(address).trim();
  // Check if it's a valid 0x... crypto address (Ethereum-like)
  return /^0x[a-fA-F0-9]{40}$/i.test(address);
}

// Alternative version with more details
function checkCryptoAddress(address) {
  if (!address || typeof address !== 'string') {
    return {
      isValid: false,
      error: 'Invalid input'
    };
  }
  // Trim whitespace
  address = address.trim();

  // Check for 0x prefix and 40 hex characters, case insensitive
  const pattern = /^0x[a-fA-F0-9]{40}$/i;
  const isValid = pattern.test(address);

  // If valid, ensure the address keeps its original case
  const formattedAddress = isValid ? address : null;

  return {
    isValid: isValid,
    address: formattedAddress,
    type: isValid ? 'ethereum-like' : null,
    error: isValid ? null : 'Invalid Ethereum address format'
  };
}

export {checkCryptoAddress,isCryptoAddress}