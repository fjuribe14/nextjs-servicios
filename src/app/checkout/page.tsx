"use client";

import Link from "next/link";
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, HandCoins, Apple } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Ticket Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Ticket Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Event:</span>
                  <span className="font-semibold">Rock Fest 2023</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span>July 15, 2023</span>
                </div>
                <div className="flex justify-between">
                  <span>Venue:</span>
                  <span>Central Park, NY</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity:</span>
                  <span>2 tickets</span>
                </div>
                <div className="flex justify-between">
                  <span>Price per ticket:</span>
                  <span>$75.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Fees:</span>
                  <span>$10.00</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>Total:</span>
                  <span>$160.00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Section */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Choose your payment method and enter your details.</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <RadioGroup
                  defaultValue="credit-card"
                  className="grid gap-4 mb-6"
                  onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Credit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex items-center">
                      <HandCoins className="w-4 h-4 mr-2" />
                      PayPal
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="apple-pay" id="apple-pay" />
                    <Label htmlFor="apple-pay" className="flex items-center">
                      <Apple className="w-4 h-4 mr-2" />
                      Apple Pay
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit-card" && (
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="card-name">Name on Card</Label>
                      <Input id="card-name" placeholder="John Doe" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="expiry-date">Expiry Date</Label>
                        <Input id="expiry-date" placeholder="MM/YY" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="text-center">
                    <p>You will be redirected to PayPal to complete your purchase.</p>
                  </div>
                )}

                {paymentMethod === "apple-pay" && (
                  <div className="text-center">
                    <p>Complete your purchase with Apple Pay.</p>
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/">Complete Purchase</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
