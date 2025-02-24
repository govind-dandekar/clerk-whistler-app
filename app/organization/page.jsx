import { OrganizationSwitcher, OrganizationList } from '@clerk/nextjs'


export default function Organization(){
	return (
		<OrganizationList 
			afterCreateOrganizationUrl="/organization/:slug"
			afterSelectOrganizationUrl="/organization/:slug"
			afterSelectPersonalUrl="/user-profile"
		/>
	)
}

