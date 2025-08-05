import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye
} from "lucide-react";

const AdminDashboard = () => {
  // Sample data for the admin dashboard
  const stats = [
    { title: "Total Subscribers", value: "287", icon: <Users className="w-6 h-6" />, trend: "+12%" },
    { title: "Active Orders", value: "156", icon: <ShoppingCart className="w-6 h-6" />, trend: "+8%" },
    { title: "Eggs in Stock", value: "2,400", icon: <Package className="w-6 h-6" />, trend: "-5%" },
    { title: "Revenue (Month)", value: "₹45,620", icon: <TrendingUp className="w-6 h-6" />, trend: "+23%" },
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "Priya Mehta", plan: "Weekly Fresh", status: "delivered", amount: "₹120" },
    { id: "ORD-002", customer: "Rajesh Kumar", plan: "Bi-Weekly Value", status: "in-transit", amount: "₹220" },
    { id: "ORD-003", customer: "Anita Sharma", plan: "Monthly Premium", status: "pending", amount: "₹400" },
    { id: "ORD-004", customer: "Vikram Singh", plan: "Weekly Fresh", status: "delivered", amount: "₹120" },
    { id: "ORD-005", customer: "Sneha Patel", plan: "Bi-Weekly Value", status: "pending", amount: "₹220" },
  ];

  const inventory = [
    { item: "Brown Eggs (Dozen)", current: 200, minimum: 50, status: "good" },
    { item: "Egg Cartons", current: 180, minimum: 100, status: "good" },
    { item: "Delivery Bags", current: 25, minimum: 30, status: "low" },
    { item: "Labels & Stickers", current: 500, minimum: 200, status: "good" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-primary text-primary-foreground">Delivered</Badge>;
      case "in-transit":
        return <Badge variant="secondary">In Transit</Badge>;
      case "pending":
        return <Badge className="bg-earth text-earth-foreground">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="w-5 h-5 text-primary" />;
      case "low":
        return <AlertTriangle className="w-5 h-5 text-destructive" />;
      default:
        return <Clock className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-warm p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your farm business operations</p>
          </div>
          <Button variant="farm" className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            View Live Site
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm ${stat.trend.startsWith('+') ? 'text-primary' : 'text-destructive'}`}>
                      {stat.trend} from last month
                    </p>
                  </div>
                  <div className="text-primary">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orders">Recent Orders</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  Latest subscription orders and deliveries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{order.id}</span>
                          {getStatusBadge(order.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">{order.plan}</p>
                        <p className="text-sm text-muted-foreground">{order.amount}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
                <CardDescription>
                  Monitor stock levels and manage supplies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventory.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(item.status)}
                        <div>
                          <p className="font-medium">{item.item}</p>
                          <p className="text-sm text-muted-foreground">
                            Minimum: {item.minimum} units
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{item.current}</p>
                        <p className="text-sm text-muted-foreground">in stock</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Update Stock
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>Customer Management</CardTitle>
                <CardDescription>
                  Subscriber information and support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Customer Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Detailed customer management features would be implemented here, including:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 max-w-md mx-auto">
                    <li>• Subscriber contact information</li>
                    <li>• Subscription status and preferences</li>
                    <li>• Delivery history and notes</li>
                    <li>• Payment status and billing</li>
                    <li>• Support ticket management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;