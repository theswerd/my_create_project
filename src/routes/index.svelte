<script lang="ts">
	import DataTable from '../components/data_table.svelte';

	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/src/languages/typescript';
	import github from 'svelte-highlight/src/styles/github-dark-dimmed';
	let code =
		"<DataTable header='Classes' \n\
	columns={[ \n\
		{\n\
				name: 'Name',\n\
				isNullable: false\n\
			},\n\
			{\n\
				name: 'Description',\n\
				isNullable: false\n\
			},\n\
			{\n\
				name: 'Price',\n\
				isNullable: false,\n\
				numeric: true,\n\
			}\n\
	]}\n\
/>";

	let code2 =
		"<DataTable \n\
		header='Classes' \n\
		columns={[ \n\
			{ \n\
				name: 'Name', \n\
				isNullable: false, \n\
				custom_style: 'font-weight: bold; color: blue;' \n\
			}, \n\
			{ \n\
				name: 'Description', \n\
				isNullable: false, \n\
				custom_style: 'color: red; border-color: red;' \n\
			}, \n\
			{ \n\
				name: 'Group', \n\
				isNullable: false, \n\
				valid_values: [ \n\
					'Science', \n\
					'English', \n\
					'Math', \n\
					'History', \n\
					'Social Studies', \n\
					'Art', \n\
					'Music', \n\
					'PE', \n\
					'Other' \n\
				] \n\
			} \n\
		]} \n\
	/>";
</script>

<svelte:head>
	{@html github}
</svelte:head>
<section>
	<h1>Raw</h1>
	<DataTable
		header="Tickets"
		columns={[
			{
				name: 'Name',
				isNullable: false
			},
			{
				name: 'Description',
				isNullable: false
			},
			{
				name: 'Price',
				isNullable: false,
				numeric: true
			}
		]}
	/>
</section>
<Highlight {code} language={typescript} />
<section>
	<h1>Styled</h1>
	<DataTable
		header="Classes"
		columns={[
			{
				name: 'Name',
				isNullable: false,
				custom_style: 'font-weight: bold; color: blue;'
			},
			{
				name: 'Description',
				isNullable: false,
				custom_style: 'color: red; border-color: red;'
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
</section>
<Highlight code={code2} language={typescript} />
