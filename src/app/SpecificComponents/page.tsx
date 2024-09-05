"use client";

import {
  Accordion,
  Button,
  Alert,
  Dropdown,
  Pagination,
  Spinner,
  Table,
  List,
  Image,
  Video,
  Carousel,
  Divider,
  Content,
  Card,
  Modal,
} from "lynx-ui-demo-components";
import { useState } from "react";

export function SpecificComponents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Suponiendo que tienes 10 páginas para la paginación

  const dropdownOptions = [
    { value: "option1", label: "Opción 1" },
    { value: "option2", label: "Opción 2" },
    { value: "option3", label: "Opción 3" },
  ];

  const handleDropdownSelect = (value: string) => {
    setSelectedOption(value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-10">Componentes Específicos</h1>

      {/* Botones */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Botones</h2>
        <Button variant="primary" className="mr-4 mb-4">Primary Button</Button>
        <Button variant="danger" className="mr-4 mb-4">Danger Button</Button>
        <Button variant="success" className="mb-4">Success Button</Button>
      </section>

      {/* Dropdown */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Dropdown</h2>
        <Dropdown
          options={dropdownOptions}
          onSelect={handleDropdownSelect}
          listVariant="light"
          listRounded="medium"
          buttonProps={{ variant: "primary" }}
          className="mb-4"
        />
        {selectedOption && <p className="mt-4">Has seleccionado: {selectedOption}</p>}
      </section>

      {/* Alertas */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Alertas</h2>
        <Alert variant="info" message="Esta es una alerta informativa" className="mb-4" />
        <Alert variant="warning" message="Cuidado, esta es una advertencia" className="mb-4" />
        <Alert variant="danger" message="Error, algo salió mal" className="mb-4" />
      </section>

      {/* Acordeón */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Acordeón</h2>
        <Accordion title="Primer Acordeón" className="mb-4">
          Este es el contenido del acordeón 1.
        </Accordion>
        <Accordion title="Segundo Acordeón" variant="secondary" rounded="small" className="mb-4">
          Este es el contenido del acordeón 2.
        </Accordion>
      </section>

      {/* Lista */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Lista</h2>
        <List items={["Elemento 1", "Elemento 2", "Elemento 3"]} className="mb-4" />
      </section>

      {/* Tarjetas */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Tarjetas</h2>
        <Card
          cardTitle="Título de la Tarjeta"
          cardContent="Este es el contenido de la tarjeta"
          className="mb-4"
        />
      </section>

      {/* Modal */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Modal</h2>
        <Button variant="primary" onClick={() => setIsModalOpen(true)} className="mb-4">
          Abrir Modal
        </Button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          padding="medium"
          borderRadius="large"
          backgroundColor="white"
          color="black"
          closeButtonText="Cerrar"
          saveButtonText="Guardar"
        >
          <p>Este es el contenido del modal.</p>
        </Modal>
      </section>

      {/* Paginación */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Paginación</h2>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mb-4"
          buttonClassName="text-blue-500"
        />
      </section>

      {/* Spinner */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Spinner</h2>
        <Spinner className="mb-4" />
      </section>

      {/* Tabla */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Tabla</h2>
        <Table
          headers={["Columna 1", "Columna 2"]}
          rows={[
            ["Fila 1 - Col 1", "Fila 1 - Col 2"],
            ["Fila 2 - Col 1", "Fila 2 - Col 2"],
          ]}
          rowsPerPage={5}
          customHeaderColor="bg-gray-200"
          customRowOddColor="bg-gray-50"
          customRowEvenColor="bg-white"
          customBorderColor="border-gray-300"
          className="mb-4"
        />
      </section>

      {/* Imagen */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Imagen</h2>
        <Image src="https://via.placeholder.com/150" alt="Ejemplo" className="mb-4" />
      </section>

      {/* Video */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Video</h2>
        <Video src="https://www.w3schools.com/html/mov_bbb.mp4" controls className="mb-4" />
      </section>

      {/* Carrusel */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Carrusel</h2>
        <Carousel
          items={[
            <img src="https://via.placeholder.com/300" alt="Slide 1" key="slide1" />,
            <img src="https://via.placeholder.com/300" alt="Slide 2" key="slide2" />,
          ]}
          rounded="large"
          interval={4000}
          controls={true}
          className="mb-4"
        />
      </section>

      {/* Divisor */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Divisor</h2>
        <Divider className="mb-4" />
      </section>

      {/* Contenido */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contenido</h2>
        <Content className="mb-4">Este es un contenido de ejemplo.</Content>
      </section>
    </>
  );
}

export default SpecificComponents;
