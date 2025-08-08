import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Download, ExternalLink, Play, FileText, Image } from 'lucide-react';

const Media = () => {
  const pressReleases = [
    {
      title: "Swan Corp Announces Q4 FY2024 Results",
      date: "March 28, 2024",
      excerpt: "Swan Corp reports strong quarterly performance with 15% growth in revenue across all business verticals.",
      category: "Financial"
    },
    {
      title: "Swan Defence Secures Major Government Contract",
      date: "March 15, 2024",
      excerpt: "SDHI wins significant defence shipbuilding contract worth ₹2,500 crores from Indian Navy.",
      category: "Business"
    },
    {
      title: "Swan Energy Expands LNG Operations",
      date: "February 28, 2024",
      excerpt: "Swan LNG announces expansion of port facilities and new FSRU partnership agreements.",
      category: "Business"
    }
  ];

  const newsArticles = [
    {
      title: "Economic Times: Swan Corp's Strategic Vision for 2024",
      publication: "Economic Times",
      date: "March 25, 2024",
      link: "#"
    },
    {
      title: "Business Standard: Leading the Defence Manufacturing Sector",
      publication: "Business Standard",
      date: "March 20, 2024",
      link: "#"
    },
    {
      title: "Mint: Swan Corp's ESG Initiatives Making Impact",
      publication: "Mint",
      date: "March 10, 2024",
      link: "#"
    }
  ];

  const events = [
    {
      title: "Swan Corp Annual General Meeting 2024",
      date: "March 30, 2024",
      type: "video",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "SDHI Shipyard Inauguration Ceremony",
      date: "February 15, 2024",
      type: "image",
      thumbnail: "/placeholder.svg"
    },
    {
      title: "Swan Mills Technology Showcase",
      date: "January 20, 2024",
      type: "video",
      thumbnail: "/placeholder.svg"
    }
  ];

  const mediaKit = {
    logos: [
      { name: "Swan Corp Primary Logo", format: "PNG", size: "2.5 MB" },
      { name: "Swan Corp Logo (White)", format: "PNG", size: "2.1 MB" },
      { name: "Swan Corp Logo (Vector)", format: "SVG", size: "156 KB" }
    ],
    businessImages: [
      { name: "SDHI Shipyard Aerial View", format: "JPG", size: "4.2 MB" },
      { name: "Swan Mills Production Floor", format: "JPG", size: "3.8 MB" },
      { name: "Swan LNG Port Facilities", format: "JPG", size: "5.1 MB" }
    ],
    videos: [
      { name: "Swan Corp Corporate Video 2024", format: "MP4", size: "125 MB" },
      { name: "SDHI Manufacturing Process", format: "MP4", size: "89 MB" },
      { name: "Swan Energy Operations", format: "MP4", size: "112 MB" }
    ],
    brochures: [
      { name: "Swan Corp Annual Report 2023-24", format: "PDF", size: "12 MB" },
      { name: "SDHI Capabilities Brochure", format: "PDF", size: "8.5 MB" },
      { name: "Swan Mills Product Catalog", format: "PDF", size: "15 MB" }
    ]
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-darker overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Media Center
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Stay updated with the latest news, announcements, and media resources from Swan Corp
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Press Releases
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Official announcements and updates from Swan Corp
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pressReleases.map((release, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{release.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {release.date}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">
                      {release.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {release.excerpt}
                    </p>
                    <button className="text-primary hover:text-primary-dark font-medium flex items-center">
                      Read More <ExternalLink className="h-4 w-4 ml-1" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* In the News */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                In the News
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Media coverage and industry recognition
              </p>
            </div>

            <div className="space-y-6">
              {newsArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-foreground">
                          {article.title}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <span className="font-medium">{article.publication}</span>
                          <span className="mx-2">•</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <button className="ml-4 text-primary hover:text-primary-dark">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events & Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Events & Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visual highlights from our corporate events and milestones
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={event.thumbnail} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      {event.type === 'video' ? (
                        <Play className="h-12 w-12 text-white" />
                      ) : (
                        <Image className="h-12 w-12 text-white" />
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {event.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources - Media Kit */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Media Kit & Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Download official brand assets, images, and corporate materials
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Brand Logos */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Brand Logos</h3>
                  <div className="space-y-3">
                    {mediaKit.logos.map((logo, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div>
                          <p className="font-medium text-foreground">{logo.name}</p>
                          <p className="text-muted-foreground">{logo.format} • {logo.size}</p>
                        </div>
                        <button className="text-primary hover:text-primary-dark">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Business Images */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Business Images</h3>
                  <div className="space-y-3">
                    {mediaKit.businessImages.map((image, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div>
                          <p className="font-medium text-foreground">{image.name}</p>
                          <p className="text-muted-foreground">{image.format} • {image.size}</p>
                        </div>
                        <button className="text-primary hover:text-primary-dark">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Videos */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Videos</h3>
                  <div className="space-y-3">
                    {mediaKit.videos.map((video, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div>
                          <p className="font-medium text-foreground">{video.name}</p>
                          <p className="text-muted-foreground">{video.format} • {video.size}</p>
                        </div>
                        <button className="text-primary hover:text-primary-dark">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Brochures */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Brochures</h3>
                  <div className="space-y-3">
                    {mediaKit.brochures.map((brochure, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div>
                          <p className="font-medium text-foreground">{brochure.name}</p>
                          <p className="text-muted-foreground">{brochure.format} • {brochure.size}</p>
                        </div>
                        <button className="text-primary hover:text-primary-dark">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Media;