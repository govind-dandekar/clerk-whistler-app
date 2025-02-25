import { OrganizationSwitcher, OrganizationList } from '@clerk/nextjs'

// update links to take to forecast based on group membership
export default function Organization(){
	return (
		<OrganizationList 
			afterCreateOrganizationUrl="/organization/:slug"
			afterSelectOrganizationUrl="/organization/:slug"
			afterSelectPersonalUrl="/user-profile"
		/>
	)
}

