export const formatTimestampToTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('pt-BR', {
        hour: "2-digit",
        minute: "2-digit",
    });
};