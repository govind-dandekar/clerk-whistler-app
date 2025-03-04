import { OrganizationList } from '@clerk/nextjs'

export default function Organization(){
	return (
		<div className="-mt-16">
			<OrganizationList 
				afterCreateOrganizationUrl="/organization/:slug"
				afterSelectOrganizationUrl="/organization/:slug"
				hidePersonal="true"
			/>
		</div>
	)
}

