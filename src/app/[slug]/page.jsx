import serviceData from '../../service';
import Image from 'next/image';
import { notFound } from 'next/navigation';


// Convert dash-slug to camelCase (e.g. blazer-fabric => BlazerFabric)
function slugToCamel(str) {
	return str
		.split('-')
		.map((word, i) => i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1))
		.join('');
}

export default function ServicePage({ params }) {
	const { slug } = params;
	const camelSlug = slugToCamel(slug);
	// Find the service object by camelSlug
	const serviceObj = serviceData.find(obj => Object.keys(obj)[0].toLowerCase() === camelSlug.toLowerCase());
	if (!serviceObj) return notFound();
	const serviceName = Object.keys(serviceObj)[0];
	const items = serviceObj[serviceName];

	return (
		<div style={{ padding: '2rem' }}>
					<h1
						style={{
							textTransform: 'capitalize',
							marginBottom: '2.5rem',
							fontSize: '2.8rem',
							fontWeight: 800,
							letterSpacing: '1.5px',
							color: '#4f46e5',
							textShadow: '0 4px 24px #a5b4fc',
							textAlign: 'center',
							background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							lineHeight: 1.1,
						}}
					>
						{serviceName.replace(/([A-Z])/g, ' $1').trim()}
					</h1>
			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
				{Object.entries(items).map(([itemName, itemData]) => (
					<div key={itemName} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', width: '320px', background: '#fafafa' }}>
						<h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{itemName.replace(/([A-Z])/g, ' $1').trim()}</h2>
						{itemData.image && (
							<Image src={itemData.image} alt={itemName} width={200} height={120} style={{ objectFit: 'contain', marginBottom: '1rem' }} />
						)}
						<ul style={{ listStyle: 'none', padding: 0 }}>
							{Object.entries(itemData).filter(([k]) => k !== 'image').map(([key, value]) => (
								<li key={key} style={{ marginBottom: '0.5rem' }}>
									<strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}:</strong> {value}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
