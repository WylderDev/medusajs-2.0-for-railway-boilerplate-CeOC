import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Well done! You did it!
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            This is just a test
          </Heading>
        </span>
        <a
          href="https://wyldertech.com/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }}>
            Check out my site
          </h1>
        </a>
      </div>
    </div>
  )
}

export default Hero
