import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Link,
} from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="sm:hidden">
      <Button onPress={onOpen} isIconOnly variant="light" radius="none">
        <Icon icon="cil:hamburger-menu" />
      </Button>
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="left"
        radius="none"
        backdrop="blur"
        size="xs"
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
            },
            exit: {
              x: 100,
              opacity: 0,
            },
          },
        }}
        className="bg-background"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody>
                <Link
                  onPress={onClose}
                  className="font-robotoSerif "
                  color="foreground"
                  href="#"
                >
                  About
                </Link>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
