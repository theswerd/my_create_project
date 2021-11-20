<script lang="ts">
	import { Writable, writable } from 'svelte/store';

	import type Column from './column';

	import type RowType from './row';
	import Row from './row.svelte';

	export let header: string = '';
	export let columns: Column[];
	export let rows: RowType[] = [];

	let clearRow: () => string[] = () => Array(columns.length).fill('');
	let new_row: string[] = clearRow();
</script>

<table>
	<caption>{header}</caption>

	<tr>
		{#each columns as { name }}
			<th>{name}</th>
		{/each}
	</tr>
	{#each rows as row, index (row)}
		<Row
			{columns}
			{row}
			on:remove={() => {
				console.log('rows old', rows);

				rows = [...rows.slice(0, index), ...rows.slice(index + 1)];
				console.log('rows old 2', rows);

				console.log('rows new', rows);
			}}
		>
			<!-- <button slot="delete_button" let:remove on:click={remove}> DeleteO </button> -->
			<button slot="edit_button" let:toggle_state on:click={toggle_state} let:editing>
				{editing ? 'Save' : 'Edit'}
			</button>
		</Row>
	{/each}
	<tr>
		{#each columns as { name, valid_values }, i}
			<td
				>{#if valid_values}
					<select bind:value={new_row[i]}>
						{#each valid_values as value}
							<option>{value}</option>
						{/each}
					</select>
				{:else}
					<p placeholder={name} bind:innerHTML={new_row[i]} contenteditable="true" />
				{/if}</td
			>
		{/each}
	</tr>
	<!-- <tr>
		<td><input bind:value={class_name} placeholder="name" /></td>
		<td><input bind:value={class_desc} placeholder="description" /></td>
		<td
			><button
				on:click={() => {
					classes = [
						...classes,
						{
							name: class_name,
							description: class_desc,
							id: classes.length + 1
						}
					];
					class_name = '';
					class_desc = '';

					console.log(classes);
				}}
			>
				Add class
			</button></td
		>
	</tr> -->
</table>
<button
	on:click={() => {
		if (
			new_row.every((value, i) => {
				return value !== '' || columns[i].isNullable;
			})
		) {
			rows = [...rows, { values: new_row }];
			new_row = clearRow();
		} else {
			alert('Please fill all the required fields');
		}
	}}>Add row</button
>
