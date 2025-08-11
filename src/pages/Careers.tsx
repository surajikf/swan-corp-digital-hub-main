import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Users, 
  Building2, 
  Briefcase,
  GraduationCap,
  Heart,
  Camera,
  Play,
  X,
  Target,
  Award,
  Globe,
  Lightbulb,
  Mail,
  Phone,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation, animationVariants } from '@/hooks/use-scroll-animation';

const Careers = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    experience: '',
    message: ''
  });

  const { elementRef, isVisible } = useScrollAnimation();

  // Mock jobs data
  const mockJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Technology',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'We are looking for a Senior Software Engineer to join our technology team...',
      requirements: ['React', 'Node.js', 'TypeScript', 'AWS'],
      postedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Manufacturing Manager',
      department: 'Manufacturing',
      location: 'Chennai',
      type: 'Full-time',
      experience: '8-12 years',
      description: 'Lead manufacturing operations and ensure quality standards...',
      requirements: ['Lean Manufacturing', 'Six Sigma', 'Team Leadership'],
      postedDate: '2024-01-14'
    },
    {
      id: 3,
      title: 'Energy Analyst',
      department: 'Energy',
      location: 'Delhi',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Analyze energy markets and develop strategic insights...',
      requirements: ['Energy Markets', 'Data Analysis', 'Excel'],
      postedDate: '2024-01-13'
    },
    {
      id: 4,
      title: 'Defence Engineer',
      department: 'Defence',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '6-10 years',
      description: 'Design and develop defence systems and naval equipment...',
      requirements: ['Naval Engineering', 'CAD', 'Project Management'],
      postedDate: '2024-01-12'
    },
    {
      id: 5,
      title: 'Real Estate Developer',
      department: 'Real Estate',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '7-12 years',
      description: 'Lead real estate development projects from concept to completion...',
      requirements: ['Real Estate Development', 'Project Management', 'Regulatory Compliance'],
      postedDate: '2024-01-11'
    }
  ];

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'technology', label: 'Technology' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'energy', label: 'Energy' },
    { value: 'defence', label: 'Defence' },
    { value: 'real-estate', label: 'Real Estate' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'bangalore', label: 'Bangalore' }
  ];

  const lifeAtSwanImages = [
    '/images/life-at-swan-1.jpg',
    '/images/life-at-swan-2.jpg',
    '/images/life-at-swan-3.jpg',
    '/images/life-at-swan-4.jpg',
    '/images/life-at-swan-5.jpg',
    '/images/life-at-swan-6.jpg'
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    },
    {
      icon: Heart,
      title: 'Respect',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      icon: Lightbulb,
      title: 'Growth',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.'
    }
  ];

  const employeeBenefits = [
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
    },
    {
      icon: Award,
      title: 'Performance Recognition',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      icon: Target,
      title: 'Financial Security',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.'
    }
  ];

  useEffect(() => {
    // Simulate loading jobs
    setJobs(mockJobs);
    setFilteredJobs(mockJobs);
  }, []);

  useEffect(() => {
    // Filter jobs based on search and filters
    let filtered = jobs;
    
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(job => 
        job.department.toLowerCase() === selectedDepartment
      );
    }
    
    if (selectedLocation !== 'all') {
      filtered = filtered.filter(job => 
        job.location.toLowerCase() === selectedLocation
      );
    }
    
    setFilteredJobs(filtered);
  }, [jobs, searchTerm, selectedDepartment, selectedLocation]);

  const loadMoreJobs = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newJobs = mockJobs.map(job => ({
        ...job,
        id: job.id + jobs.length,
        title: `${job.title} ${jobs.length + 1}`,
        postedDate: new Date().toISOString().split('T')[0]
      }));
      
      setJobs(prev => [...prev, ...newJobs]);
      setPage(prev => prev + 1);
      setLoading(false);
      
      if (page >= 3) {
        setHasMore(false);
      }
    }, 1000);
  };

  const handleApply = (job: any) => {
    setSelectedJob(job);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      department: '',
      experience: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Layout>
      {/* Banner */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Join Our <span className="text-gold">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Build your career with one of India's most diversified and respected conglomerates
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Company Name</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
              ut aliquip ex ea commodo consequat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-muted-foreground">Employees Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">4</div>
              <div className="text-muted-foreground">Business Verticals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The foundation of our culture and the principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Life at Company */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Life at <span className="text-primary">Company Name</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our vibrant culture, collaborative environment, and opportunities for growth
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {lifeAtSwanImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => {
                  setSelectedImage(index);
                  setShowGallery(true);
                }}
              >
                <div className="aspect-square bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Modal */}
          {showGallery && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
              <div className="relative max-w-4xl mx-4">
                <button
                  onClick={() => setShowGallery(false)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300"
                >
                  <X className="h-8 w-8" />
                </button>
                <div className="aspect-video bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                  <Play className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Employee <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We invest in our people with comprehensive benefits and programs that support their well-being and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employeeBenefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Current <span className="text-primary">Openings</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover exciting opportunities across our diverse business verticals
            </p>
          </div>

          {/* Search and Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map(dept => (
                  <SelectItem key={dept.value} value={dept.value}>
                    {dept.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(loc => (
                  <SelectItem key={loc.value} value={loc.value}>
                    {loc.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <Card 
                key={job.id} 
                className="p-6 hover-lift cursor-pointer"
                onClick={() => handleApply(job)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Building2 className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">{job.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-8">
              <Button 
                variant="corporate" 
                onClick={loadMoreJobs}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More Jobs'}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Get in Touch with Us */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Get in Touch with <span className="text-primary">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to join our team? Send us your details and we'll get back to you
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Position of Interest *</label>
                    <Input
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      placeholder="e.g., Software Engineer"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Department</label>
                    <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.slice(1).map(dept => (
                          <SelectItem key={dept.value} value={dept.value}>
                            {dept.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Years of Experience</label>
                    <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your background, skills, and why you're interested in joining our company..."
                    rows={4}
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" variant="corporate" size="lg" className="w-full md:w-auto">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
