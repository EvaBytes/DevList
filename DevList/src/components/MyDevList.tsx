import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Header from "./Header";
import Footer from "./Footer";
import ItemGrid from "./ItemGrid";
import Toast from "./Toast";
import AddItem from "./AddItem";
import {LocalStorageState} from "../hooks/LocalStorageState";
import { getGradientFor } from "../utils/gradients";
import { DevItem } from "../types/devitem";

const DEFAULT_ITEMS: Omit<DevItem, "done">[] = [
  { id: 1, emoji: "💡", title: "Aprender algo nuevo cada día", desc: "La curiosidad es mi motor." },
  { id: 2, emoji: "🧩", title: "Resolver problemas con creatividad", desc: "Ver el código como un rompecabezas." },
  { id: 3, emoji: "🤝", title: "Colaborar con otros devs", desc: "Compartir y crecer juntos." },
  { id: 4, emoji: "🎨", title: "Diseñar con empatía y estilo", desc: "Interfaces que cuidan al usuario." },
  { id: 5, emoji: "⚡", title: "Romper cosas (¡y aprender al arreglarlas!)", desc: "Errores = lecciones." },
  { id: 6, emoji: "🚀", title: "Seguir creciendo sin miedo al cambio", desc: "El siguiente salto es este curso." },
];

const MyDevlist: React.FC = () => {
  const [items, setItems] = useLocalStorageState<DevItem[]>(
    "mydevlist:items",
    DEFAULT_ITEMS.map(i => ({ ...i, done: false }))
  );

  const [showToast, setShowToast] = useState(false);

  const progress = Math.round((items.filter(i => i.done).length / items.length) * 100);

  useEffect(() => {
    if (items.every(i => i.done)) {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [items]);

  const toggle = (id: number) => {
    setItems(prev => prev.map(i => (i.id === id ? { ...i, done: !i.done } : i)));
  };

  const resetAll = () => {
    setItems(DEFAULT_ITEMS.map(i => ({ ...i, done: false })));
  };

  const addItem = (newItem: Omit<DevItem, "id" | "done">) => {
    setItems(prev => [...prev, { id: Date.now(), done: false, ...newItem }]);
  };

  return (
    <div className="w-full max-w-3xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6">
      <Header progress={progress} />
      <main>
        <ItemGrid items={items} toggle={toggle} />
        <Footer onReset={resetAll} onAdd={addItem} />
      </main>
      <AnimatePresence>
        {showToast && <Toast message="🎉 You did it! Now go code something awesome 💪🚀" />}
      </AnimatePresence>
    </div>
  );
};

export default MyDevlist;
