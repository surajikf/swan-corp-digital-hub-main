import React, { useEffect, useRef, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MapPin, Building, Users, Globe } from 'lucide-react';

// Mock locations data
const locations = [
  {
    id: 1,
    name: "Mumbai Corporate Office",
    type: "Headquarters",
    address: "Swan House, 94 Nepean Sea Road, Mumbai - 400006",
    phone: "+91 22 6131 4000",
    employees: 150,
    coordinates: [72.8081, 19.0760]
  },
  {
    id: 2,
    name: "SDHI Shipyard - Pipavav",
    type: "Manufacturing",
    address: "SDHI Shipyard, Pipavav Port, Gujarat - 365560",
    phone: "+91 2794 662000",
    employees: 800,
    coordinates: [71.5370, 20.9056]
  },
  {
    id: 3,
    name: "Swan Mills - Rajkot",
    type: "Manufacturing",
    address: "Swan Mills, Rajkot Industrial Estate, Gujarat - 360003",
    phone: "+91 281 2471000",
    employees: 450,
    coordinates: [70.7833, 22.3039]
  },
  {
    id: 4,
    name: "Swan LNG Terminal - Jafrabad",
    type: "Energy",
    address: "Swan LNG Terminal, Jafrabad Port, Gujarat - 365540",
    phone: "+91 2794 672000",
    employees: 120,
    coordinates: [71.6000, 20.9167]
  },
  {
    id: 5,
    name: "Delhi Regional Office",
    type: "Office",
    address: "Connaught Place, New Delhi - 110001",
    phone: "+91 11 4321 5000",
    employees: 80,
    coordinates: [77.2090, 28.6139]
  },
  {
    id: 6,
    name: "Bangalore Technology Center",
    type: "Office",
    address: "Electronic City, Bangalore - 560100",
    phone: "+91 80 4567 8000",
    employees: 200,
    coordinates: [77.5946, 12.9716]
  }
];

const GlobalPresence = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      // @ts-ignore
      mapboxgl.accessToken = mapboxToken;
      
      // @ts-ignore
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [77.1025, 20.5937], // Center of India
        zoom: 5,
        projection: 'mercator'
      });

      // Add navigation controls
      // @ts-ignore
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      // Add markers for each location
      locations.forEach((location) => {
        // Create marker element
        const markerEl = document.createElement('div');
        markerEl.className = 'custom-marker';
        markerEl.style.cssText = `
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
          transition: transform 0.2s ease;
        `;
        
        const icon = document.createElement('div');
        icon.innerHTML = '📍';
        icon.style.fontSize = '16px';
        markerEl.appendChild(icon);

        markerEl.addEventListener('mouseenter', () => {
          markerEl.style.transform = 'scale(1.1)';
        });

        markerEl.addEventListener('mouseleave', () => {
          markerEl.style.transform = 'scale(1)';
        });

        // @ts-ignore
        const marker = new mapboxgl.Marker(markerEl)
          .setLngLat(location.coordinates)
          .addTo(map.current);

        // Add popup
        // @ts-ignore
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-3">
              <h3 class="font-semibold text-sm mb-1">${location.name}</h3>
              <p class="text-xs text-gray-600 mb-2">${location.type}</p>
              <p class="text-xs">${location.address}</p>
            </div>
          `);

        markerEl.addEventListener('click', () => {
          popup.addTo(map.current);
          setSelectedLocation(location);
        });
      });

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      alert('Please enter a valid Mapbox token');
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    initializeMap();
  };

  // Load Mapbox GL JS
  useEffect(() => {
    if (!document.querySelector('script[src*="mapbox-gl"]')) {
      const script = document.createElement('script');
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js';
      script.async = true;
      document.head.appendChild(script);

      const link = document.createElement('link');
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-darker overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Globe className="h-12 w-12 text-gold mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Global Presence
                </h1>
              </div>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Swan Corp's strategic locations across India, driving excellence in manufacturing, energy, and defence
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-12 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Strategic Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1800+</div>
                <div className="text-sm text-muted-foreground">Total Employees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-sm text-muted-foreground">States Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years of Operation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Map */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Locations
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore Swan Corp's strategic presence across India
              </p>
            </div>

            {showTokenInput ? (
              <Card className="max-w-md mx-auto mb-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Enter Mapbox Token</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Please enter your Mapbox public token to view the interactive map. 
                    Get your token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                  </p>
                  <form onSubmit={handleTokenSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors"
                    >
                      Load Map
                    </button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Map */}
                <div className="lg:col-span-2">
                  <Card className="overflow-hidden">
                    <div 
                      ref={mapContainer} 
                      className="w-full h-96 lg:h-[500px]"
                      style={{ minHeight: '400px' }}
                    />
                  </Card>
                </div>

                {/* Location Details */}
                <div className="space-y-4">
                  {selectedLocation && (
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{selectedLocation.name}</h3>
                        <Badge variant="secondary" className="mb-3">
                          {selectedLocation.type}
                        </Badge>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 mr-2 flex-shrink-0" />
                            <span>{selectedLocation.address}</span>
                          </div>
                          <div className="flex items-center">
                            <Building className="h-4 w-4 text-muted-foreground mr-2" />
                            <span>{selectedLocation.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-muted-foreground mr-2" />
                            <span>{selectedLocation.employees} Employees</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="text-sm text-muted-foreground">
                    Click on map markers to view location details
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Location Grid */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {locations.map((location) => (
                <Card key={location.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {location.name}
                      </h3>
                      <Badge variant="outline">{location.type}</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{location.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{location.employees} Employees</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default GlobalPresence;