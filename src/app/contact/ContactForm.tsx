'use client'
import React from 'react'
import { Button, Modal, ModalOverlay, ModalContent,
  useColorMode, 
  ModalHeader,
  useDisclosure,
  ModalFooter,
  ModalBody,
  ModalCloseButton, 
  FormControl,
  FormLabel,
  Input,
  Textarea} from '@chakra-ui/react';

  function ContactForm() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()

    return (
       <>
        <Button 
         onClick={onOpen} 
         mb='40px' 
         bgColor={colorMode === 'dark' ? "brand" : "#76A8CA"}
         _hover={colorMode === 'dark' ? { bg: "#3A3B3C" } : { bg: "#92C1E1" }}
        >
            Contact Form
        </Button>
         <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  />
          <ModalContent p={8} bgColor={colorMode === 'dark' ? "#121111" : "#FFFFFF"}>
            <ModalHeader textAlign='center'>Complete the form</ModalHeader>
            <ModalCloseButton />
            <ModalBody textAlign='center'>
             <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder='Name' />
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='Email' />
              <FormLabel>Subject</FormLabel>
              <Input placeholder='Subject' />
              <FormLabel>Message</FormLabel>
              <Textarea placeholder='Message' h='90px' resize="vertical" maxHeight='300px' />
              <ModalFooter mt='10px'>
               <Button mr={3} onClick={onClose}>
                Close
               </Button>
               <Button colorScheme='blue' type='submit'>Send me an email</Button>
              </ModalFooter>
             </FormControl>
            </ModalBody>
          </ModalContent>
        </Modal>
       </>
    )
  }
  
  export default ContactForm