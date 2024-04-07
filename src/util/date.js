import { format, render, cancel, register } from 'timeago.js';

export function formatAgo(date){
    return format(date);
}