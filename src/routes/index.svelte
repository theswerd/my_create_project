<script lang="ts">
	import DataTable from '../components/data_table.svelte';
	import { writable } from 'svelte/store';
	import type { person, classroom, class_people } from '../schema';
	import Layout from './__layout.svelte';
	let class_name = '';
	let class_desc = '';

	let people: person[] = [];
	let class_people: class_people[] = [];
	let classes: classroom[] = [];
</script>

<section>
	<DataTable
		header="Classes"
		columns={[
			{
				name: 'Name',
				isNullable: false,
			},
			{
				name: 'Description',
                isNullable: false,
			},
			{
				name: 'Group',
                isNullable: false,
				valid_values: [
					'Science',
					'English',
					'Math',
					'History',
					'Social Studies',
					'Art',
					'Music',
					'PE',
					'Other'
				]
			}
		]}
	/>
	<!-- <table>
        <caption>Classes</caption>

		<tr>
			<th> Name</th>
			<th>Description</th>
			<th> ID</th>
		</tr>
		{#each classes as { name, id, description }}
			<tr>
				<td>{name}</td>
				<td>{description}</td>
				<td>{id}</td>
			</tr>
		{/each}
		<tr>
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
		</tr>
	</table> -->
</section>
<section>
	<button> Add a student </button>
</section>
<section>
	<select>
		{#each people as person}
			<option value={person.id}>{person.name}</option>
		{/each}
	</select>
	<select>
		{#each classes as c}
			<option value={c.id}>{c.name}</option>
		{/each}
	</select>
	<button> add a student to a class </button>
</section>
