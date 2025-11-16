import { Button } from '@/components/ui/button'
import { Shield, Heart, Sparkles } from 'lucide-react'
import { PROJECT_URL } from '@/lib/constants'

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-primary-foreground">
            Ready to Transform Your Child's Learning?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Join thousands of parents who trust InstaEdu for safe, engaging, and educational screen time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all"
            >
              <a href={PROJECT_URL}>Start Learning Today</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full bg-white/10 hover:bg-white/20 text-primary-foreground border-primary-foreground/30"
            >
              <a href="#pricing">View Pricing</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span className="font-medium">100% Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6" />
              <span className="font-medium">Parent Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              <span className="font-medium">Expert Curated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
