export function formatTimestamp(inputDateTime: string): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formattedDateTime = new Date(inputDateTime).toLocaleString(
    "en-US",
    options
  );
  return formattedDateTime;
}
