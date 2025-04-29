const maskEmail = (email: string): string => {
  const [localPart, domainPart] = email.split('@');

  const start = localPart.slice(0, 2);
  const end = localPart.slice(-2);
  const maskedLocal = `${start}****${end}`;

  const domainSuffix = domainPart.slice(-4);
  const maskedDomain = `***${domainSuffix}`;

  return `${maskedLocal}@${maskedDomain}`;
};

export default maskEmail;
