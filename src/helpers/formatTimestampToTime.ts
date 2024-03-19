export const formatTimestampToTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
    });
};