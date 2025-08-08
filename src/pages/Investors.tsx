import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  FileText, 
  TrendingUp, 
  Building2, 
  Shield, 
  Users, 
  Download, 
  Mail, 
  Phone,
  ExternalLink,
  Calendar,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Investors = () => {
  const financialReports = [
    { title: 'Q3 FY24 Results', date: 'Dec 2023', type: 'Quarterly', size: '2.1 MB' },
    { title: 'Q2 FY24 Results', date: 'Sep 2023', type: 'Quarterly', size: '1.8 MB' },
    { title: 'Q1 FY24 Results', date: 'Jun 2023', type: 'Quarterly', size: '1.9 MB' },
    { title: 'Annual Report FY23', date: 'Mar 2023', type: 'Annual', size: '12.5 MB' },
  ];

  const subsidiaries = [
    {
      name: 'Swan Defence & Heavy Industries (SDHI)',
      business: 'Defence Shipbuilding & Heavy Engineering',
      holding: '74.2%',
      revenue: '₹2,850 Cr'
    },
    {
      name: 'Veritas (India) Limited',
      business: 'Petroleum & Petrochemicals Trading',
      holding: '65.8%', 
      revenue: '₹4,200 Cr'
    },
    {
      name: 'Swan LNG Private Limited',
      business: 'LNG Terminal Operations',
      holding: '100%',
      revenue: '₹1,650 Cr'
    },
    {
      name: 'Swan Realty Limited',
      business: 'Real Estate Development',
      holding: '82.5%',
      revenue: '₹1,200 Cr'
    }
  ];

  const boardMembers = [
    { name: 'Mr. Nikhil Merchant', position: 'Chairman & Managing Director', tenure: '25 years' },
    { name: 'Ms. Priya Sharma', position: 'Executive Director - Finance', tenure: '12 years' },
    { name: 'Mr. Rajesh Kumar', position: 'Independent Director', tenure: '8 years' },
    { name: 'Dr. Anita Desai', position: 'Independent Director', tenure: '6 years' },
    { name: 'Mr. Vikram Singh', position: 'Non-Executive Director', tenure: '10 years' },
  ];

  const committees = [
    {
      name: 'Audit Committee',
      chairman: 'Mr. Rajesh Kumar',
      members: ['Dr. Anita Desai', 'Mr. Vikram Singh'],
      meetings: '6 meetings in FY23'
    },
    {
      name: 'CSR Committee', 
      chairman: 'Dr. Anita Desai',
      members: ['Mr. Nikhil Merchant', 'Ms. Priya Sharma'],
      meetings: '4 meetings in FY23'
    },
    {
      name: 'Nomination & Remuneration Committee',
      chairman: 'Mr. Vikram Singh',
      members: ['Mr. Rajesh Kumar', 'Dr. Anita Desai'],
      meetings: '3 meetings in FY23'
    },
    {
      name: 'Risk Management Committee',
      chairman: 'Ms. Priya Sharma',
      members: ['Mr. Nikhil Merchant', 'Mr. Rajesh Kumar'],
      meetings: '5 meetings in FY23'
    }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Investor <span className="text-gold">Relations</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Building sustainable value through transparent governance and strategic growth
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">₹12,000 Cr</div>
              <div className="text-sm text-gray-300">Annual Revenue</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">18.5%</div>
              <div className="text-sm text-gray-300">ROE</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">₹485</div>
              <div className="text-sm text-gray-300">Share Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">₹8,500 Cr</div>
              <div className="text-sm text-gray-300">Market Cap</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto container-padding">
        {/* Financial Information */}
        <section className="section-padding">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">
            Financial Information
          </h2>
          
          <Tabs defaultValue="reports" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="reports">Financial Reports</TabsTrigger>
              <TabsTrigger value="presentations">Presentations</TabsTrigger>
              <TabsTrigger value="subsidiaries">Subsidiaries</TabsTrigger>
              <TabsTrigger value="disclosures">Disclosures</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reports" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {financialReports.map((report, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{report.title}</h3>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{report.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                                {report.type}
                              </span>
                              <span className="text-xs">{report.size}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="presentations" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">Q3 FY24 Investor Presentation</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Comprehensive overview of quarterly performance and strategic outlook
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">Annual Strategy Presentation</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Long-term vision and strategic initiatives across business verticals
                      </p>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="subsidiaries" className="mt-8">
              <div className="space-y-6">
                {subsidiaries.map((subsidiary, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{subsidiary.name}</h3>
                          <p className="text-sm text-muted-foreground">{subsidiary.business}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Holding</div>
                            <div className="font-semibold text-primary">{subsidiary.holding}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Revenue</div>
                            <div className="font-semibold text-foreground">{subsidiary.revenue}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="disclosures" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 hover-lift">
                  <h3 className="font-semibold text-foreground mb-4">Shareholding Pattern</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Promoter & Promoter Group</span>
                      <span className="font-medium">65.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Public Shareholders</span>
                      <span className="font-medium">28.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Institutional Investors</span>
                      <span className="font-medium">6.3%</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View Detailed Pattern
                  </Button>
                </Card>
                <Card className="p-6 hover-lift">
                  <h3 className="font-semibold text-foreground mb-4">Corporate Policies</h3>
                  <div className="space-y-3">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Code of Conduct
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Whistle Blower Policy
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Related Party Transaction Policy
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Risk Management Policy
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Corporate Governance */}
        <section className="section-padding bg-secondary rounded-2xl">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">
            Corporate Governance
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Board of Directors */}
            <div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-6">
                Board of Directors
              </h3>
              <div className="space-y-4">
                {boardMembers.map((member, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.position}</p>
                        <p className="text-xs text-gold">{member.tenure} with Swan Corp</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Committees */}
            <div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-6">
                Board Committees
              </h3>
              <div className="space-y-4">
                {committees.map((committee, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                        <Shield className="h-6 w-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{committee.name}</h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          <strong>Chairman:</strong> {committee.chairman}
                        </p>
                        <p className="text-sm text-muted-foreground mb-1">
                          <strong>Members:</strong> {committee.members.join(', ')}
                        </p>
                        <p className="text-xs text-gold">{committee.meetings}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Investors */}
        <section className="section-padding">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">
            Investor Contact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
                  Investor Grievances
                </h3>
                <p className="text-muted-foreground mb-4">
                  For any investor complaints or grievances
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> investors@swancorp.in</p>
                  <p><strong>Phone:</strong> +91 22 6666 7780</p>
                  <p><strong>Hours:</strong> Mon-Fri, 10:00 AM - 5:00 PM</p>
                </div>
                <Button variant="corporate" size="sm" className="mt-4">
                  Submit Grievance
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 hover-lift">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
                  Registrar & Transfer Agent
                </h3>
                <p className="text-muted-foreground mb-4">
                  For share transfer and related services
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>KFin Technologies Limited</strong></p>
                  <p>Selenium Tower B, Plot 31-32, Gachibowli</p>
                  <p>Hyderabad - 500032</p>
                  <p><strong>Email:</strong> einward.ris@kfintech.com</p>
                  <p><strong>Phone:</strong> +91 40 6716 2222</p>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  Contact RTA
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Investors;