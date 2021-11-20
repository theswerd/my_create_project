<script lang="ts">
	import type Column from './column';

	import type Row from './row';

	export let row: Row;
	export let columns: Column[];

	let values = row.values;
	let editing = row.editing;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let toggle_editing_state = () => {
		editing = !editing;
	};
</script>

<tr>
	{#each values as value, column_index}
		<td>
			{#if editing}
				{#if columns[column_index].valid_values}
					<select bind:value={values[column_index]}>
						{#each columns[column_index].valid_values as value}
							<option {value}>{value}</option>
						{/each}
					</select>
				{:else}
					<p bind:innerHTML={values[column_index]} contenteditable="true" />
				{/if}
			{:else}
				<p>{value}</p>
			{/if}
		</td>
	{/each}
	<td>
		<!-- <slot name="delete_button" remove={() => dispatch('remove')}> -->
			<button
				on:click={() => {
					dispatch('remove');
				}}>Remove</button
			>
		<!-- </slot> -->
	</td>
	<td>
		<slot name="edit_button" toggle_state={toggle_editing_state} {editing}>
			<button on:click={toggle_editing_state}>
				{editing ? 'Save' : 'Edit'}
			</button>
		</slot>
	</td>
</tr>

<style>
	*:hover > *[contenteditable='true'] {
		background-color: rgba(217, 245, 255, 0.5);
	}

	p {
		margin: 0px;
	}
</style>
