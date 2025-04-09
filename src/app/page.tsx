import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4'>
      <h1 className='text-foreground text-3xl font-bold'>Hello World</h1>
      <Button>Click</Button>
    </div>
  )
}
