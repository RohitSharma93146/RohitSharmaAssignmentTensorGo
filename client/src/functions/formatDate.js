export default function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric'};
    return date.toLocaleString('en-IN', options);
}