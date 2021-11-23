export default interface Column {
    name: string;
    valid_values?: string[];
    isNullable?: boolean;
    custom_style?: string;
    numeric?: boolean;
}