import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart } from "lucide-react";

// Mock product data
const mockProducts = {
  mybt: {
    broadband: [
      {
        id: "bt-fiber-1",
        name: "BT Fibre Essential",
        price: "£28.99",
        speed: "36Mb",
        description: "Perfect for browsing, emails and social media",
        features: ["Unlimited downloads", "BT Complete WiFi", "24/7 support"]
      },
      {
        id: "bt-fiber-2", 
        name: "BT Fibre 2",
        price: "£32.99",
        speed: "67Mb",
        description: "Great for streaming and gaming",
        features: ["Unlimited downloads", "BT Complete WiFi", "BT Sport App", "24/7 support"]
      }
    ],
    mobile: [
      {
        id: "bt-mobile-1",
        name: "BT Mobile SIM Only",
        price: "£20.00",
        data: "15GB",
        description: "Perfect monthly allowance with unlimited calls and texts",
        features: ["Unlimited calls & texts", "15GB data", "Roam like home", "BT WiFi access"]
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
        description: "Reliable broadband for everyday use",
        features: ["Unlimited downloads", "EE Smart WiFi", "24/7 support"]
      }
    ],
    mobile: [
      {
        id: "ee-mobile-1",
        name: "EE 5G Essential",
        price: "£25.00",
        data: "20GB",
        description: "5G speeds with plenty of data",
        features: ["Unlimited calls & texts", "20GB 5G data", "EU roaming", "EE WiFi access"]
      },
      {
        id: "ee-mobile-2",
        name: "EE 5G Max",
        price: "£45.00", 
        data: "Unlimited",
        description: "Unlimited everything with premium perks",
        features: ["Unlimited everything", "5G speeds", "Apple Music", "BT Sport", "EU roaming"]
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
        description: "Honest broadband at a great price",
        features: ["Unlimited downloads", "No contract", "Award-winning support"]
      }
    ],
    mobile: [
      {
        id: "plusnet-mobile-1",
        name: "Plusnet SIM Only",
        price: "£15.00",
        data: "10GB",
        description: "Simple, honest mobile deals",
        features: ["Unlimited calls & texts", "10GB data", "No contract", "EU roaming"]
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
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <Badge variant="secondary">{product.speed}</Badge>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {product.price}
                        <span className="text-sm font-normal text-muted-foreground">/month</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full"
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
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <Badge variant="secondary">{product.data}</Badge>
                    </div>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {product.price}
                        <span className="text-sm font-normal text-muted-foreground">/month</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full"
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