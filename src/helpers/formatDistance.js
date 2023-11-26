import { formatDistanceToNow } from 'date-fns';

export function formatDistance(date) {
    return formatDistanceToNow(new Date(date), { addSuffix: true })
}