import { Banknote, Building2, Circle } from 'lucide-react';

export const PAYMENT_METHODS: { key: string; labelKey: string; icon: typeof Banknote }[] = [
  { key: 'cash', labelKey: 'pos.methodCash', icon: Banknote },
  { key: 'bankily', labelKey: 'pos.methodBankily', icon: Building2 },
  { key: 'masrvi', labelKey: 'pos.methodMasrvi', icon: Building2 },
  { key: 'sedad', labelKey: 'pos.methodSedad', icon: Building2 },
  { key: 'bimbank', labelKey: 'pos.methodBimbank', icon: Building2 },
  { key: 'other', labelKey: 'pos.methodOther', icon: Circle },
];
