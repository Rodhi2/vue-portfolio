<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'Web Application',
				singleProjectDate: '21 Oktober, 2022',
				singleProjectTag: 'Frontend',
			},
			projectImages: [
				{
					id: 1,
					title: '',
					img: require(''),
				},
				{
					id: 2,
					title: '',
					img: require(''),
				},
				{
					id: 3,
					title: '',
					img: require(''),
				},
			],
			projectInfo: {
				clientHeading: 'About',
				companyInfos: [
					{
						id: 1,
						title: '',
						details: '',
					},
					{
						id: 2,
						title: '',
						details: '',
					},
					{
						id: 3,
						title: '',
						details: '',
					},
					{
						id: 4,
						title: '',
						details: '',
					},
				],
				objectivesHeading: 'Objective',
				objectivesDetails:
					'To be the most trusted financing platform for sustainable and demand-driven skill development.',
				technologies: [
					{
						title: 'Tools & Technologies',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'TailwindCSS',
							,
						],
					},
				],
				projectDetailsHeading: 'Challenge',
				projectDetails: [
					{
						id: 1,
						details:
							'Website Portfolio Vue Js',
					}
				
				],
				socialSharingsHeading: 'Share This',
				socialSharings: [
					{
						id: 1,
						name: 'Github',
						icon: 'github',
						url: 'https://github.com/Rodhi2/',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: 'instagram',
						url: 'https://www.instagram.com/faisalmufid1',
					},
					{
						id: 3,
						name: 'Gitlab',
						icon: 'gitlab',
						url: 'https://gitlab.com/projects111/rodhi-faisal-mufid/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://www.linkedin.com/in/rodhifaisalmufid/',
					},
				],
			},
			relatedProject: {
				relatedProjectsHeading: 'Related Projects',
				relatedProjects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: require(''),
					},
					{
						id: 2,
						title: 'Web Application',
						img: require(''),
					},
					{
						id: 3,
						title: 'UI Design',
						img: require(''),
					},
					
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
