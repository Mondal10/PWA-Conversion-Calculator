export class Utility {
    // To convert '-', '_' and ' ' separated words into Capital Case
    static toCapitalize(string) {
        return string
            .toLowerCase()
            .split(/-| |_/)
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    }
}