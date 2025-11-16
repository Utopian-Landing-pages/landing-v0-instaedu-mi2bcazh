import { features } from '@/lib/data'
import { School, ShieldCheck, PlayCircle, MessageCircle, Users } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const iconMap = {
  School,
  ShieldCheck,
  PlayCircle,
  MessageCircle,
  Users,
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance text-foreground">
            Everything Your Child Needs to Learn Safely
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the powerful features that make InstaEdu the perfect learning companion for your children.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            
            return (
              <Card
                key={feature.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
