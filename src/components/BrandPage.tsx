import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Wifi, Clock, Shield } from "lucide-react";

// Product Images
import btFibreEssential from "@/assets/products/bt-fibre-essential.jpg";
import btFibre2 from "@/assets/products/bt-fibre-2.jpg";
import btSuperfastFibre from "@/assets/products/bt-superfast-fibre.jpg";
import btMobileSim from "@/assets/products/bt-mobile-sim.jpg";
import ee5GPhone from "@/assets/products/ee-5g-phone.jpg";
import eeFibreRouter from "@/assets/products/ee-fibre-router.jpg";
import plusnetRouter from "@/assets/products/plusnet-router.jpg";
import plusnetMobile from "@/assets/products/plusnet-mobile.jpg";

// Expanded product data with images and detailed information
const mockProducts = {
  mybt: {
    broadband: [
      {
        id: "bt-fiber-1",
        name: "BT Fibre Essential",
        price: "£28.99",
        speed: "36Mb",
        originalPrice: "£35.99",
        contractLength: "18 months",
        setupCost: "£9.99",
        image: btFibreEssential,
        description: "Perfect for browsing, emails and social media with reliable speeds",
        detailedDescription: "Get online with confidence. Our entry-level fibre package delivers consistent speeds perfect for everyday internet use, email, and social media browsing.",
        features: [
          "Average download speed: 36Mb",
          "Unlimited downloads",
          "BT Complete WiFi guarantee",
          "24/7 technical support",
          "BT WiFi hotspot access",
          "Online security included"
        ],
        benefits: ["Great for 1-2 users", "HD streaming on 1 device", "Video calling", "Social media"]
      },
      {
        id: "bt-fiber-2", 
        name: "BT Fibre 2",
        price: "£32.99",
        speed: "67Mb",
        originalPrice: "£39.99",
        contractLength: "24 months",
        setupCost: "£9.99",
        image: btFibre2,
        description: "Great for streaming and gaming with enhanced speeds",
        detailedDescription: "Step up to faster speeds perfect for multiple device households. Stream, game, and browse simultaneously without compromise.",
        features: [
          "Average download speed: 67Mb",
          "Unlimited downloads", 
          "BT Complete WiFi guarantee",
          "BT Sport app included",
          "24/7 technical support",
          "BT Cloud storage 500GB",
          "Advanced security suite"
        ],
        benefits: ["Great for 3-4 users", "4K streaming on 2 devices", "Online gaming", "Video conferencing"]
      },
      {
        id: "bt-fiber-3",
        name: "BT Superfast Fibre",
        price: "£39.99",
        speed: "150Mb",
        originalPrice: "£49.99",
        contractLength: "24 months",
        setupCost: "Free",
        image: btSuperfastFibre,
        description: "Ultra-fast speeds for demanding households with multiple users",
        detailedDescription: "Our fastest fibre package delivers lightning-fast speeds for households that demand the best. Perfect for working from home, 4K streaming, and gaming.",
        features: [
          "Average download speed: 150Mb",
          "Unlimited downloads",
          "BT Complete WiFi Pro",
          "BT Sport app & TNT Sports",
          "Priority technical support",
          "BT Cloud storage 1TB",
          "Premium security suite",
          "Hybrid Connect backup"
        ],
        benefits: ["Great for 5+ users", "Multiple 4K streams", "Professional gaming", "Large file uploads"]
      }
    ],
    mobile: [
      {
        id: "bt-mobile-1",
        name: "BT Mobile SIM Only",
        price: "£20.00",
        data: "15GB",
        originalPrice: "£25.00",
        contractLength: "30 day rolling",
        image: btMobileSim,
        description: "Perfect monthly allowance with unlimited calls and texts",
        detailedDescription: "Great value SIM-only deal with generous data allowance and the flexibility of a 30-day rolling contract.",
        features: [
          "15GB 4G data allowance",
          "Unlimited calls & texts",
          "Roam like home in EU",
          "BT WiFi hotspot access",
          "Spend cap protection",
          "5G ready network"
        ],
        benefits: ["No upfront cost", "EU roaming included", "BT customer discounts", "Flexible contract"]
      },
      {
        id: "bt-mobile-2",
        name: "BT Mobile Plus",
        price: "£30.00",
        data: "50GB",
        originalPrice: "£35.00",
        contractLength: "12 months",
        image: btMobileSim,
        description: "Enhanced data allowance perfect for heavy users",
        detailedDescription: "Generous data allowance for those who need more. Perfect for streaming, social media, and staying connected on the go.",
        features: [
          "50GB 5G data allowance",
          "Unlimited calls & texts",
          "Roam like home in EU",
          "BT WiFi hotspot access",
          "BT Sport app included",
          "Premium customer support",
          "International calling credits"
        ],
        benefits: ["5G speeds included", "BT Sport access", "Priority network access", "International perks"]
      }
    ]
  },
  myee: {
    broadband: [
      {
        id: "ee-fiber-1",
        name: "EE Fibre Essential",
        price: "£29.99",
        speed: "36Mb",
        originalPrice: "£34.99",
        contractLength: "18 months",
        setupCost: "£9.99",
        image: eeFibreRouter,
        description: "Reliable broadband for everyday use with EE's award-winning network",
        detailedDescription: "Essential fibre broadband that delivers reliable speeds for everyday internet activities. Perfect for small households.",
        features: [
          "Average download speed: 36Mb",
          "Unlimited downloads",
          "EE Smart WiFi technology",
          "24/7 technical support",
          "EE WiFi hotspot access",
          "Digital security included"
        ],
        benefits: ["EE network reliability", "Smart WiFi optimization", "Nationwide hotspots", "Mobile bundle discounts"]
      },
      {
        id: "ee-fiber-2",
        name: "EE Fibre Plus",
        price: "£35.99",
        speed: "67Mb",
        originalPrice: "£42.99",
        contractLength: "24 months",
        setupCost: "Free",
        image: eeFibreRouter,
        description: "Enhanced speeds perfect for streaming and working from home",
        detailedDescription: "Faster fibre speeds with enhanced features. Great for households with multiple users and devices.",
        features: [
          "Average download speed: 67Mb",
          "Unlimited downloads",
          "EE Smart WiFi Pro",
          "EE TV subscription included",
          "Priority customer support",
          "Advanced parental controls",
          "Mesh WiFi extender included"
        ],
        benefits: ["EE TV entertainment", "WiFi optimization", "Faster customer support", "Smart home ready"]
      }
    ],
    mobile: [
      {
        id: "ee-mobile-1",
        name: "EE 5G Essential",
        price: "£25.00",
        data: "20GB",
        originalPrice: "£30.00",
        contractLength: "24 months",
        image: ee5GPhone,
        description: "5G speeds with generous data allowance on the UK's best network",
        detailedDescription: "Experience the power of 5G with EE's award-winning network. Perfect data allowance for most users.",
        features: [
          "20GB 5G data allowance",
          "Unlimited calls & texts",
          "EU roaming included",
          "EE WiFi hotspot access",
          "Data gifting",
          "5G speeds in 150+ towns"
        ],
        benefits: ["UK's best 5G coverage", "Data sharing options", "EU roaming included", "Priority network access"]
      },
      {
        id: "ee-mobile-2",
        name: "EE 5G Max",
        price: "£45.00", 
        data: "Unlimited",
        originalPrice: "£55.00",
        contractLength: "24 months",
        image: ee5GPhone,
        description: "Unlimited everything with premium perks and entertainment",
        detailedDescription: "The ultimate mobile experience with unlimited data, premium entertainment, and exclusive benefits on EE's fastest network.",
        features: [
          "Unlimited 5G data",
          "Unlimited calls & texts",
          "Apple Music included",
          "BT Sport mobile access",
          "EU roaming unlimited",
          "Premium customer support",
          "Device upgrade benefits"
        ],
        benefits: ["No data limits", "Premium entertainment", "International roaming", "Priority everything"]
      },
      {
        id: "ee-mobile-3",
        name: "EE 5G Premium",
        price: "£60.00",
        data: "Unlimited",
        originalPrice: "£70.00",
        contractLength: "24 months",
        image: ee5GPhone,
        description: "Ultimate premium experience with all benefits included",
        detailedDescription: "The pinnacle of mobile experiences with unlimited everything, premium entertainment, and exclusive VIP benefits.",
        features: [
          "Unlimited 5G data & calls",
          "Apple Music & Apple TV+",
          "Netflix Standard included",
          "BT Sport & TNT Sports",
          "Worldwide roaming",
          "VIP customer support", 
          "Annual device upgrade",
          "Airport lounge access"
        ],
        benefits: ["All streaming services", "Global roaming", "VIP treatment", "Latest devices first"]
      }
    ]
  },
  plusnet: {
    broadband: [
      {
        id: "plusnet-fiber-1",
        name: "Plusnet Unlimited Fibre",
        price: "£24.99",
        speed: "36Mb",
        originalPrice: "£29.99",
        contractLength: "18 months",
        setupCost: "Free",
        image: plusnetRouter,
        description: "Honest broadband at a great price with award-winning customer service",
        detailedDescription: "Straightforward fibre broadband without the fuss. Great value with Plusnet's honest approach to internet.",
        features: [
          "Average download speed: 36Mb",
          "Unlimited downloads",
          "No hidden costs",
          "Award-winning support",
          "No contract options available",
          "Free security software"
        ],
        benefits: ["Honest pricing", "Flexible contracts", "UK-based support", "No surprises"]
      },
      {
        id: "plusnet-fiber-2",
        name: "Plusnet Superfibre",
        price: "£29.99",
        speed: "66Mb",
        originalPrice: "£35.99",
        contractLength: "18 months",
        setupCost: "Free",
        image: plusnetRouter,
        description: "Faster speeds for households that need more from their broadband",
        detailedDescription: "Enhanced fibre speeds with the same honest approach. Perfect for families who stream, game, and work from home.",
        features: [
          "Average download speed: 66Mb",
          "Unlimited downloads",
          "Enhanced WiFi router",
          "Priority customer support",
          "No usage restrictions",
          "Free security suite",
          "Plusnet member benefits"
        ],
        benefits: ["Better hardware included", "Member discounts", "Faster support", "Gaming optimized"]
      }
    ],
    mobile: [
      {
        id: "plusnet-mobile-1",
        name: "Plusnet SIM Only",
        price: "£15.00",
        data: "10GB",
        originalPrice: "£20.00",
        contractLength: "30 day rolling",
        image: plusnetMobile,
        description: "Simple, honest mobile deals with no hidden costs",
        detailedDescription: "Straightforward mobile plans with transparent pricing. Perfect for those who want simplicity and value.",
        features: [
          "10GB 4G data allowance",
          "Unlimited calls & texts",
          "No contract required",
          "EU roaming included",
          "Honest billing",
          "Award-winning support"
        ],
        benefits: ["No hidden fees", "Flexible plans", "Great value", "Trusted service"]
      },
      {
        id: "plusnet-mobile-2",
        name: "Plusnet Smart",
        price: "£22.00",
        data: "30GB",
        originalPrice: "£28.00",
        contractLength: "12 months",
        image: plusnetMobile,
        description: "More data for households that need reliable mobile connectivity",
        detailedDescription: "Enhanced data allowance with the same honest pricing. Perfect for families and professionals who rely on mobile data.",
        features: [
          "30GB 4G data allowance",
          "Unlimited calls & texts", 
          "EU roaming included",
          "Data rollover included",
          "Family plan discounts",
          "Priority customer support",
          "Mobile hotspot included"
        ],
        benefits: ["Data never expires", "Family savings", "Business features", "Reliable coverage"]
      }
    ]
  }
};

const brandInfo = {
  mybt: {
    name: "MYBT",
    description: "BT's premium broadband and phone services",
    color: "bg-primary",
    textColor: "text-primary-foreground"
  },
  myee: {
    name: "MYEE", 
    description: "EE's award-winning mobile network",
    color: "bg-accent",
    textColor: "text-accent-foreground"
  },
  plusnet: {
    name: "Plusnet",
    description: "Honest, straightforward deals",
    color: "bg-blue-600",
    textColor: "text-white"
  }
};

const BrandPage = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const navigate = useNavigate();

  if (!brandId || !mockProducts[brandId as keyof typeof mockProducts]) {
    return <div>Brand not found</div>;
  }

  const brand = brandInfo[brandId as keyof typeof brandInfo];
  const products = mockProducts[brandId as keyof typeof mockProducts];

  const addToCart = (product: any, type: string) => {
    // TODO: Implement cart functionality
    console.log(`Added ${product.name} (${type}) to cart`);
    // Show toast notification here
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <div className={`w-8 h-8 ${brand.color} ${brand.textColor} rounded-full flex items-center justify-center text-sm font-bold`}>
                  {brand.name.slice(0, 2)}
                </div>
                <h1 className="text-2xl font-bold text-primary">{brand.name}</h1>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart (0)</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Brand Hero */}
      <section className={`${brand.color} ${brand.textColor} py-12`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">{brand.name}</h2>
          <p className="text-xl opacity-90">{brand.description}</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Broadband Products */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Broadband Packages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.broadband.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground font-semibold">
                        {product.speed}
                      </Badge>
                    </div>
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="destructive" className="bg-red-500 text-white">
                          Save £{(parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))).toFixed(2)}
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold text-primary">{product.price}</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {product.contractLength}
                        </span>
                        <span className="flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Setup: {product.setupCost}
                        </span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-3 text-foreground">What's included:</h4>
                      <ul className="space-y-2">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                        {product.features.length > 4 && (
                          <li className="text-xs text-muted-foreground ml-5">
                            +{product.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    {product.benefits && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-2 text-foreground">Perfect for:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.benefits.map((benefit, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button 
                      className="w-full font-semibold"
                      onClick={() => addToCart(product, 'broadband')}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Products */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">Mobile Plans</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.mobile.map((product) => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground font-semibold">
                        {product.data}
                      </Badge>
                    </div>
                    {product.originalPrice && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="destructive" className="bg-red-500 text-white">
                          Save £{(parseFloat(product.originalPrice.slice(1)) - parseFloat(product.price.slice(1))).toFixed(2)}
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-foreground mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl font-bold text-primary">{product.price}</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {product.contractLength}
                        </span>
                        <span className="flex items-center gap-1">
                          <Wifi className="w-3 h-3" />
                          {product.data} data
                        </span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-3 text-foreground">What's included:</h4>
                      <ul className="space-y-2">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                        {product.features.length > 4 && (
                          <li className="text-xs text-muted-foreground ml-5">
                            +{product.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Benefits */}
                    {product.benefits && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-sm mb-2 text-foreground">Perfect for:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.benefits.map((benefit, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button 
                      className="w-full font-semibold"
                      onClick={() => addToCart(product, 'mobile')}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;