export const timeElapsed = (dateString: string | Date): string => {
    const date = new Date(dateString);
    const now  = new Date();

    const diffInMs = now.getTime() - date.getTime();

    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours   = Math.floor(minutes / 60);
    const days    = Math.floor(hours / 24);

    const remainingHours   = hours % 24;
    const remainingMinutes = minutes % 60;

    let result = '';

    if (days > 0) {
        result += `${days} d `;
    }

    if (remainingHours > 0) {
        result += `${remainingHours} h `;
    }

    if (remainingMinutes > 0) {
        result += `${remainingMinutes} m `;
    }

    return result.trim() || 'agora mesmo';
}
