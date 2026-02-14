"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export interface AutocompleteOption {
  value: string;
  label: string;
  detail?: string;
}

interface AutocompleteProps {
  id: string;
  label: string;
  placeholder?: string;
  options: AutocompleteOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function Autocomplete({
  id,
  label,
  placeholder = "",
  options,
  value,
  onChange,
}: AutocompleteProps) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Sync input text with selected value
  useEffect(() => {
    if (value) {
      const selected = options.find((o) => o.value === value);
      if (selected) {
        setSearch(selected.label);
      }
    } else {
      setSearch("");
    }
  }, [value, options]);

  const filtered = options.filter((o) => {
    const q = search.toLowerCase();
    return (
      o.label.toLowerCase().includes(q) ||
      (o.detail && o.detail.toLowerCase().includes(q))
    );
  });

  const selectOption = useCallback(
    (option: AutocompleteOption) => {
      onChange(option.value);
      setSearch(option.label);
      setIsOpen(false);
      setActiveIndex(-1);
    },
    [onChange],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    setIsOpen(true);
    setActiveIndex(-1);
    // Clear selection when user types
    if (value) {
      onChange("");
    }
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < filtered.length) {
          selectOption(filtered[activeIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setActiveIndex(-1);
        break;
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      const item = listRef.current.children[activeIndex] as HTMLElement;
      item?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const listboxId = `${id}-listbox`;

  return (
    <div ref={containerRef} className="fr-input-group" style={{ marginBottom: 0 }}>
      <label className="fr-label" htmlFor={id}>
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <input
          ref={inputRef}
          className="fr-input"
          type="text"
          id={id}
          placeholder={placeholder}
          value={search}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-activedescendant={
            activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined
          }
          aria-autocomplete="list"
        />
        {isOpen && filtered.length > 0 && (
          <ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              margin: 0,
              padding: 0,
              listStyle: "none",
              background: "var(--background-default-grey)",
              border: "1px solid var(--border-default-grey)",
              borderTop: "none",
              borderRadius: "0 0 0.25rem 0.25rem",
              maxHeight: "16rem",
              overflowY: "auto",
              zIndex: 1000,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
          >
            {filtered.map((option, index) => (
              <li
                key={option.value}
                id={`${id}-option-${index}`}
                role="option"
                aria-selected={index === activeIndex}
                onMouseDown={(e) => {
                  e.preventDefault();
                  selectOption(option);
                }}
                onMouseEnter={() => setActiveIndex(index)}
                style={{
                  padding: "0.25rem 0.75rem",
                  cursor: "pointer",
                  lineHeight: 1.3,
                  background:
                    index === activeIndex
                      ? "var(--background-contrast-grey-hover)"
                      : "transparent",
                }}
              >
                <span style={{ fontSize: "0.875rem" }}>{option.label}</span>
                {option.detail && (
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-mention-grey)",
                    }}
                  >
                    {option.detail}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
        {isOpen && filtered.length === 0 && search.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              padding: "0.75rem 1rem",
              background: "var(--background-default-grey)",
              border: "1px solid var(--border-default-grey)",
              borderTop: "none",
              borderRadius: "0 0 0.25rem 0.25rem",
              color: "var(--text-mention-grey)",
              zIndex: 1000,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
          >
            Aucun résultat
          </div>
        )}
      </div>
    </div>
  );
}
