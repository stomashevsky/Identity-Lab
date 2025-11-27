import { useCallback } from 'react'

/**
 * Хук для обработки восстановления значения по умолчанию при blur
 * Используется в полях ввода, где нужно вернуть дефолтное значение, если поле пустое
 */
export function useInputDefaultValue(defaultValue: string) {
  return useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === '') {
      e.target.value = defaultValue
    }
  }, [defaultValue])
}

