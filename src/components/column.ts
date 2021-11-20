export default interface Column {
    name: string;
    valid_values?: string[];
    isNullable?: boolean;
}