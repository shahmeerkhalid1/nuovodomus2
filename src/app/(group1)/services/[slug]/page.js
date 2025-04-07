import ServiceSingle from '@/components/ServiceSingle'
import { serviceDetailsData } from '@/lib/fackData/serviceDetailsData'
import { notFound } from 'next/navigation'

// Add this function to generate all possible slug values
export async function generateStaticParams() {
  // Return an array of objects with the slug parameter
  return Object.keys(serviceDetailsData).map(slug => ({
    slug: slug,
  }))
}

// Export metadata function correctly (should be outside the component)
export async function generateMetadata({ params }) {
  const { slug } = params
  const serviceData = serviceDetailsData[slug]
  
  if (!serviceData) {
    return {
      title: "Service Not Found",
    }
  }
  
  return {
    title: `NuovoDomus -- ${serviceData.serviceTitle}`,
    description: serviceData.serviceDescription,
  }
}

// This is a dynamic page that will render different services based on the slug
export default function ServicePage({ params }) {
  const { slug } = params
  
  // Get the service data for this slug
  const serviceData = serviceDetailsData[slug]
  
  // If the service doesn't exist, return 404
  if (!serviceData) {
    notFound()
  }
  
  return <ServiceSingle {...serviceData} />
}