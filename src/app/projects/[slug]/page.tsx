
import { notFound } from 'next/navigation';
import { portfolioData } from '@/data/portfolio';
import { ProjectPageContent } from '@/components/projects/ProjectPageContent';

export async function generateStaticParams() {
    return portfolioData.projects.map((project) => ({
        slug: project.slug,
    }));
}

import { getProjectImages } from '@/app/actions/getProjectImages'; // Import server action

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Fetch dynamic images for ALL projects to populate their preview images!
    const allProjectsWithImages = await Promise.all(
        portfolioData.projects.map(async (p) => {
            const images = await getProjectImages(p.slug, p.title);
            return {
                ...p,
                image: images.length > 0 ? images[0] : p.image,
                galleryImages: images.length > 0 ? images : p.galleryImages
            };
        })
    );

    const updatedProject = allProjectsWithImages.find((p) => p.slug === slug)!;

    return <ProjectPageContent project={updatedProject} allProjects={allProjectsWithImages} />;
}
